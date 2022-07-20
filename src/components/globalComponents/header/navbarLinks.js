import Nav from 'react-bootstrap/Nav';

function NavbarLinks(props) {
    return (
    
            <Nav.Link href={props.links}>
                 {props.title}
            </Nav.Link>
           
    )
}


export default NavbarLinks