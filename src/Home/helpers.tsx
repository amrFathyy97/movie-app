import { Button } from "@mui/material";
import { PageContent } from "../types/types";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const Content = (): ReactElement => {
  const navigate = useNavigate();
  const handleButton = {
    onClick: () => {
      navigate("/movies")
    },
  };

  const content: PageContent = {
    title: (<h1>DramaFlicks</h1>),
    btn: (
      <Button className="btn" variant="text" {...handleButton}>
        Button
      </Button>
    ),
    description: (
      <p className="hidden md:flex">
"DramaFlicks.net is your premier destination for high-quality dramatic films. Immerse yourself in a world of compelling storytelling, captivating performances, and thought-provoking narratives. From timeless classics to contemporary masterpieces, our curated selection ensures that every film enthusiast finds something to enjoy. With a user-friendly interface and a commitment to excellence, DramaFlicks.net delivers an unparalleled cinematic experience. Explore the depth of human emotion, the complexity of relationships, and the beauty of the human experience through our carefully curated collection of dramas. Whether you're seeking inspiration, entertainment, or simply a moment of reflection, DramaFlicks.net invites you to discover the power of storytelling through the lens of cinema."
      </p>
    ),
  };
  return (
    <>
    {content.title}
    {content.description}
    {content.btn}
    </>
  )
};

export default Content