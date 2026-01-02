import { Editor } from "@tinymce/tinymce-react";

 function TinyEditor({ value, onChange }) {
  return (
    <Editor
      apiKey="YOUR_KEY"
      value={value}
      onEditorChange={onChange}
      init={{ height: 400, skin: "oxide-dark", content_css: "dark" }}
    />
  );
}
export default TinyEditor;
