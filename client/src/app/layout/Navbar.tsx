import Logo from "../../assets/logo.png";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../store/store";

const NavBar = () => {
  const { activityStore } = useStore();

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
            <Button
              onClick={() => activityStore.openForm()}
              positive
              content="Create Activity"
            />
          </Menu>
        </Container>
      </Menu>
    </header>
  );
};

export { NavBar };
