import React,  {useState, useEffect} from 'react';
import Nav from './components/Nav'
import Search from './components/Search'
import Matching from './components/Matching'

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
//import theme from './themeConfig'
//import darkTheme from './darkThemeConfig'
import {Paper, Grid} from '@material-ui/core/'
import {teal} from '@material-ui/core/colors/'


function App() {

  const [darkMode,setDarkMode]= useState(false);

  const darkTheme = createMuiTheme({
    palette:{
      type: "dark",
      primary: {
        main:teal[900]
    }
    },
    });

  const lightTheme = createMuiTheme(    {
    palette: {
        primary: {
            main:teal[100]
        }
    }
  });
  

  
  const [lectura, setLectura] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('apple')

  useEffect(() => {
      const obtenerDatos=async()=>{

          const API_ID= 'e2b8feac';
          const API_KEY='d43c7fc546394de2d6018f768d937e02'
         const datauri=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
  
          const data = await fetch(datauri)
         const traerDatos= await data.json()
         console.log(traerDatos)
          setLectura(traerDatos.hits)
      }

      obtenerDatos()
  },[query])

  
  const getSearch=(e)=>{
    setSearch(e.target.value)
}

const updateChange = (e)=>{
    e.preventDefault()
    setQuery(search)
}

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Paper>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Search search={search} setQuery={setQuery} setSearch={setSearch} updateChange={updateChange} getSearch={getSearch}/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            {
            
            lectura.map(x=>(
                
                <Matching key={x.recipe.uri} 
                id={x.recipe.url} title={x.recipe.label} calories={x.recipe.calories} yield={x.recipe.yield}
                image={x.recipe.image} url={x.recipe.url} healthLabels={x.recipe.healthLabels} source={x.recipe.source}  ingredientLines={x.recipe.ingredientLines}
                />
                
            ))
            
            }
            </Grid>
            </Paper>
    </ThemeProvider>
  );
}

export default App;
