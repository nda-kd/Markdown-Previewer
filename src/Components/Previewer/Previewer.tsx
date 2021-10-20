import "./Previewer.scss";
import marked from "marked";
import renderHTML from "react-render-html";
import Prism from "prismjs";

type Props = {
  items: string;
};
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const Previewer: React.FC<Props> = ({ items }) => {
  return (
    <div id="preview" className="previewer-wrap">
      {renderHTML(marked(items))}
    </div>
  );
};

export default Previewer;
