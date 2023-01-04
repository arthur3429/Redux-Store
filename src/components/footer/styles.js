import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #F5F6F8;
    display: flex;
    align-items: center;


    .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1290px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    @media (max-width: 1324px) {
        padding: 0 30px;
    }

    @media (max-width: 425px) {
        height: 80px;
    }

    .logo img {
        max-width: 100px;
        cursor: pointer;
    }

    .social {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .social svg {
        cursor: pointer;
    }
`

export const Credits = styled.p`
    text-align: center;
    background-color: #F5F6F8;
    padding: 10px;
    font-size: 14px;
    color: #878787;
`
