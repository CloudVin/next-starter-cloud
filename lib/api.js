import fs from 'fs'
import path from 'path'
import matter  from 'gray-matter'
import dayjs from 'dayjs'
import renderToString from 'next-mdx-remote/render-to-string';
import prism from 'remark-prism';
import externalLinks from 'remark-external-links';

//获取post的目录
const postDirectory=path.join(process.cwd(),'_posts')

//读取post目录下的所有文件（所有的文章，简称PostSlug）
// fs.readirSync方法读取文件夹，将返回一个包含“指定目录下所有文件夹名称”的数组对象。
export const getPostSlugList= ()=>fs.readdirSync(postDirectory)

//返回一个对象，获取post的所有数据，通过slug获取每一个slug的元数据（slug是url的一部分，解释了页面的内容，这里一般指post的路由（一般是文件名，可以自定义）），
export  function getPostMetaDataBySlug(slug){
    //获取postslug的路径
    const postPath=path.join(postDirectory,slug,'index.mdx')
    //读取文件内容
    const fileContent=fs.readFileSync(postPath,'utf-8')
    //由于读取的内容是mdx的格式，需要经过处理react才能识别，所以需要第三方库来解析，这里用的gray-matter，
    //gray-matter返回一个对象，｛data,content｝,data里是元数据，content则是内容
    const {data} = matter(fileContent)
    return {
        title:data.title,
        tag:data.tag,
        description:data.description,
        date:dayjs(data.date).format('YYYY-MM-DD'),
        slug//这里的slug用来当动态路由
    }
}

//获取所有博文的元数据，并按照时间先后顺序排序，这个函数主要用来在首页展示文章列表
export  function getPostList(){
    const slugs=getPostSlugList()
    return slugs
            .map((slug)=>getPostMetaDataBySlug(slug))
            .sort((a,b)=>dayjs(a.date).isBefore(b.date)?1:-1)
            //sort（）返回的值大于0，a就在b后面，dayjs().isBefore(),检查一个时间对象是否在另一个之前
}

//根据slug获取博文的数据，并通过renderToString转换为html，在服务端进行脱水处理，然后客户端通过hydrate(注水)来展示组件内容
export async function getPostBySlug(slug){
    const postPath=path.join(postDirectory,slug,'index.mdx')
    const postContent=fs.readFileSync(postPath,'utf-8')
    const {data,content} = matter(postContent)

    return {
        title: data.title,
        date: dayjs(data.date).format('YYYY-MM-DD'),
        description: data.description,
        content: await renderToString(content, {
                        mdxOptions: { remarkPlugins: [prism, externalLinks] },
                }),
    }
}
