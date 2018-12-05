import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class Edit extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  render () {
      const {editorState} =this.props;
    return (
      <BraftEditor value={this.state.editorStste} onChange={this.handleChange}/>
    )
  }
  componentDidMount(){
      console.log('进入子组件');
  }
  handleChange = (editorStste) => {
    this.setState({ editorStste })
  }

}