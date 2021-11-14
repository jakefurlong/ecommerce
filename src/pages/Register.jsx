import styled from "styled-components"
import {mobile} from "../Responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255 ,255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://nimbusdevops.s3.us-west-1.amazonaws.com/images/pink-account.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    display: flex;
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-weight: 500;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder = "name"/>
                    <Input placeholder = "last name"/>
                    <Input placeholder = "email"/>
                    <Input placeholder = "username"/>
                    <Input placeholder = "password"/>
                    <Input placeholder = "confirm password"/>
                    <Agreement>
                        <p>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></p>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
