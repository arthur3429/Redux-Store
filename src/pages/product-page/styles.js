import styled from "styled-components";

export const ProductInformation = styled.div`
    width: 100%;
    background-color: #F5F6F8;
    padding-bottom: 40px;

    .wrapper {
        max-width: 1290px;
        margin: 0 auto;
        border: 1px solid rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        background-color: #fff;
        padding-bottom: 0;
    }
    
    h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: #272727;
        max-width: 1290px;
        margin: 0 auto;
        padding: 30px 0;
        transition: all 0.6s ease-in-out;
        opacity: 0;
    }

    h1.active {
        opacity: 1;
    }

    .container {
        display: flex;
        gap: 30px;
        transition: opacity 0.9s ease-in-out;
        opacity: 0;

    }

    .container.active {
        opacity: 1;
    }


    .image-container {
        width: 50%;
    }
    
    .image-container img {
        height: 100%;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.03);
        border-radius: 10px;
    }

    .product-details {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-right: 30px;
    }

    h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: #2C2C2C;
        padding: 30px 0;
    }

    span {
        width: 100%;
        background-color: #F5F6F8;
        border: 1px solid rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        padding: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #878787;
    }

    hr {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.03);
        margin: 30px 0;
    }

    .property {           
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #2C2C2C;
    }

    .options {
        padding: 5px 15px;
        width: fit-content;
        background: #FFF;
        border: 1px solid rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #2C2C2C;
        margin: 15px 0;
    }

    button {
        padding: 10px 0;
        background: #2C2C2C;
        border: 1px solid rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(1px);
        border-radius: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
        transition: all 0.4s;
    }

    button:hover {
        background: #111;
    }

    .property-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        cursor: pointer;
    }

    .property-2 p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        color: #2C2C2C;
    }

    @media (max-width: 1324px) {
        .container {
            display:flex;
            justify-content: center;
        }
        .image-container {
            width: 400px;
        }

        .product-details {
            width: 400px;
        }

        .wrapper {
            width: fit-content;
        }
    }

    @media (max-width: 900px) {
        .container {
            flex-direction: column;
            gap: 0;
        }
        h1 {
            text-align: center;
            padding: 15px;
        }

        h2 {
            padding: 15px 0;
        }

        hr {
            margin: 15px 0;
        }

        .product-details {
            padding: 0 15px 15px 15px;
        }
    }

    @media (max-width: 425px) {
        h1 {
            font-size: 6vw;
        }

        .wrapper {
            background-color: transparent;
        }

        .image-container, .product-details {
            width: calc(100% - 30px);
            margin: 0 15px;
        }

        .product-details {
            margin-top: 10px;
            padding: 0 10px 15px 10px;
            background-color: #fff;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.03);
        }

        span, button {
            font-size: 4vw
        }

        h2 {
            font-size: 5.5vw;
        }

        .property, .property-2 p {
            font-size: 4vw;
        }

        .options {
            font-size: 3.6vw;
        }
    }

`