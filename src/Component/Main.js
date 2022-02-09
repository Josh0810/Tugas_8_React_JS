import "./Style/Main.css";
import { Carousel, Container } from "react-bootstrap";

function Main() {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
            alt="First slide"
            height={450}
          />
          <Carousel.Caption>
            <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
            alt="Second slide"
            height={450}
          />

          <Carousel.Caption>
            <h3>Inggris Mau Jadi Tim Terbaik Dunia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
            alt="Third slide"
            height={450}
          />

          <Carousel.Caption>
            <h3>Diego Godin Ukir Rekor Spesial Lawan Thailand</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
export default Main;
