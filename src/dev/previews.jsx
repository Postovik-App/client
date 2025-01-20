import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { TypingText } from "@/shared/ui/TypingText/TypingText.jsx";
import EyesChat from "@/widgets/EyesChat/EyesChat.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/TypingText">
        <TypingText />
      </ComponentPreview>
      <ComponentPreview path="/EyesChat">
        <EyesChat />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
