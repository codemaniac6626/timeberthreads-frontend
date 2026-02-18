// import { useAppSelector } from "../../store/hooks";
// import { setUserState } from "../../store/slices/userSlice"
import { Button, Container, Text } from "@mantine/core";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={"root"}>
      <Container size="ls" px={80}>
        <div className={"inner"}>
          <div className={"content"}>
            <div className="title">Buy One Plant One</div>

            <Text className={"descriptionxx"} mt={30}>
              Buy what you need, make the world better. For every product
              purchased, a new plant is planted. It’s shopping that gives back
              and creates a lasting difference. Together, we can make every
              order count.
            </Text>

            <Button
              variant="outline"
              color="#ffffff"
              size="xl"
              className={"control"}
              mt={20}
              onClick={() => navigate("/explore")}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
