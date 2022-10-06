import { useState, useEffect } from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import { ArrowRightCircle} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Android Developer","Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText  = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <div>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span>Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Rizwan `} <span className="wrap">{text}</span></h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rem, impedit maiores harum dolorem quaerat tenetur, quis sed inventore voluptate ducimus, non eveniet provident. Aliquid nihil nobis enim odit nesciunt!</p>
                            <button onClick={ () => console.log('connect')}>Let's Connect <ArrowRightCircle /></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt='Header Img' />

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}