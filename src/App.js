import {
  useRemirrorContext,
  RemirrorManager,
  ManagedRemirrorProvider,
} from '@remirror/react'
import React from 'react'
import './App.css'

const App = ({ children, ...props }) => (
  <RemirrorManager>
    <ManagedRemirrorProvider {...props}>
      <>
        <InnerEditor />
        {children}
      </>
    </ManagedRemirrorProvider>
  </RemirrorManager>
)

const InnerEditor = () => {
  const { getRootProps } = useRemirrorContext()

  return <div {...getRootProps()} data-testid="remirror-wysiwyg-editor" />
}

export default App
