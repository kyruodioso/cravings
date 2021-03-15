import {unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'


const theme = createMuiTheme(
    {
      palette: {
          primary: {
              main:teal[100]
          }
      }
    }
)


export default theme;