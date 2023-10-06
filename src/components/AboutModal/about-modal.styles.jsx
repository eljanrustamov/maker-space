import styled from 'styled-components';

export const ModalBackground = styled.div`
    display: flex;
    /* display: none; */
    justify-content: center;
    align-items:center;
    width: 100vw;
    height: 100vh;

    position: fixed;
    top:0;
    background-color: rgba(0,0,0,0.7);
    z-index:999;
    transition: 0.2s ease-in;

`

export const Modal = styled.div`
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111;
    padding: 5rem 1rem;
    border-radius: 12px;
    transition: 0.3s all;
    overflow: scroll;

    @media(max-width:576px){
        height: 100%;
        width: 100%;

       
    }

    .img-wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        img{
            width: 100%;
            border-radius: 12px;
        }
    }

    .content{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin:0 1rem;

        .title{
            color: #fff;
            font-size: 32px;
            margin: 1rem 0;
        }
        .text{
            font-size: 18px;
            color: #c3c3c3;
        }
    }


    .close-btn{
        width: 40px;
        height: 40px;
        background-color: #fff;
        position: absolute;
        top: 1rem;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: #0CC9C3;
            font-size: 24px;
        }

        @media (max-width:576px){
            &{
            position: fixed;
            }
        }
    }

    .close-btn-2{
        width: 30%;
        background: transparent;
        border: 1px solid #56595F;
        color: #fff;
        outline: none;
        padding: .3rem .7rem;
        border-radius: 5px;
        margin-top: .8rem;
        transition: 0.3s;

        &:hover{
            border-color: #0CC9C3;
            color: #0CC9C3;
        }
    }
`

