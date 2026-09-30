import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
const MarkdownEditor = ({ onContentChange }) => {
  const element = React.useRef(null);
  const callback = React.useRef(onContentChange);
  callback.current = onContentChange;

  React.useEffect(() => {
    const editor = new Editor({ el: element.current, hideModeSwitch: true });
    editor.addHook('change', () => callback.current(editor.getMarkdown()));
    return () => editor.destroy();
  }, []);

  return <div ref={element} />;
};

export default MarkdownEditor;
// END
