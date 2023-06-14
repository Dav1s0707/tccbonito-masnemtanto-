import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartao() {
  return (
    <div className='banner2'>
      <div>
        <h2>Conheça nossa funcionalidades</h2>
      </div>
      <div className='linha'>
        <Card style={{ width: ' 30rem' }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam dicta perspiciatis eveniet ipsa corporis, aspernatur dignissimos porro eligendi quidem. Magni aspernatur nulla ea quas tempore tempora consectetur. Alias, aspernatur.
            </Card.Text>
            <Button variant="primary">Ver mais</Button>
          </Card.Body>
        </Card>

      <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam dicta perspiciatis eveniet ipsa corporis, aspernatur dignissimos porro eligendi quidem. Magni aspernatur nulla ea quas tempore tempora consectetur. Alias, aspernatur.
            </Card.Text>
            <Button variant="primary">Ver mais</Button>
          </Card.Body>
        </Card>
{/* pergunta pro sopa como q faz pros card irem pra direita sem mudarem de tamanho */}

      </div>
    </div>
  );
}
export default Cartao;
