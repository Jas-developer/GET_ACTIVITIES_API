import Logo from "../../assets/logo.png";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

const NavBar = ({ openForm }: Props) => {
  return (
    <header>
      <Menu inverted fixed="top" style={{ padding: "10px" }}>
        <Container>
          <Menu.Item header>
            <img src={Logo} alt="" style={{ marginRight: "10px" }} />
            Reactivities
          </Menu.Item>
          <Menu.Item name="Activities" />
          <Menu>
            <Button onClick={openForm} positive content="Create Activity" />
          </Menu>
        </Container>
      </Menu>
    </header>
  );
};

export { NavBar };
