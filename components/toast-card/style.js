import styled from 'styled-components'

export const ToastCardWrapper = styled.div`
    position: relative;
    background: #EEEEEE;
    height:${props=>props.height}px;
        .blogList{
            position: absolute;
            top:0;
            left: 50%;
            transform: translateX(-50%);
            background: white;
          
            
            border-radius: 10px;
            box-shadow: 0 12px 15px 0 rgba(0,0,0,.25);
            transition:all 0.3s linear;

}
`