// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import actualizarRegistro from '@/api/actualizarRegistro';
// import { ICategory } from '../../../interfaces/';

// const UpdateCategory = () => {
//   const router = useRouter();
//   const { catid } = router.query; // Obtener el parámetro dinámico de la ruta

//   const [category, setCategory] = useState<ICategory>({ catid: '', catname: '', catgroup: '', catdesc: '' });
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(`/categories/${catid}`);
//         const data = await response.json();
//         setCategory(data.category);
//       } catch (error) {
//         setErrorMessage('Error al cargar la categoría');
//       }
//     };

//     if (catid) {
//       fetchCategory();
//     }
//   }, [catid]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCategory({ ...category, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const { catid: catidToUpdate, ...data } = category; // No enviar catid en data
//       const response = await actualizarRegistro(
//         // category.catid,
//         catidToUpdate,
//          category);
//       console.log(response);
//       // Aquí podrías hacer algo con la respuesta, como redirigir a la lista de categorías
//       router.push('/categories');
//     } catch (error) {
//       setErrorMessage('Error al actualizar la categoría');
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
//       <Box sx={{ width: '50%' }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Actualizar categoría
//         </Typography>
//         {errorMessage && (
//           <Typography variant="body1" color="error" align="center" gutterBottom>
//             {errorMessage}
//           </Typography>
//         )}
//         <form onSubmit={handleSubmit}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField
//               id="catid"
//               name="catid"
//               label="ID"
//               value={category.catid}
//               disabled
//             />
//             <TextField
//               id="catname"
//               name="catname"
//               label="Nombre"
//               value={category.catname}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               id="catgroup"
//               name="catgroup"
//               label="Grupo"
//               value={category.catgroup}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               id="catdesc"
//               name="catdesc"
//               label="Descripción"
//               value={category.catdesc}
//               onChange={handleChange}
//               multiline
//               rows={4}
//               required
//             />
//             <Button variant="contained" type="submit" color="primary">
//               Guardar
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default UpdateCategory;
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ICategory } from '../../../interfaces/';
import { Box, Button, TextField, Typography } from '@mui/material';
import actualizarRegistro from '@/api/actualizarRegistro';

const UpdateCategory = () => {
  const router = useRouter();
  const { catid } = router.query;

  const [category, setCategory] = useState<ICategory>({ catname: '', catgroup: '', catdesc: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/categories/find/${catid}`);
        const data = await response.json();
        setCategory(data.category);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        // setErrorMessage('Error al cargar la categoría');
      }
    };

    if (catid) {
      fetchCategory();
    }
  }, [catid]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await actualizarRegistro(catid as string, category);
      setIsLoading(false);
      console.log(response);
      router.push('/categories');
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Error al actualizar la categoría');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
      <Box sx={{ width: '50%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Actualizar categoría
        </Typography>
        {isLoading && (
          <Typography variant="body1" align="center" gutterBottom>
            Cargando...
          </Typography>
        )}
        {errorMessage && (
          <Typography variant="body1" color="error" align="center" gutterBottom>
            {errorMessage}
          </Typography>
        )}
        {!isLoading && (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField id="catid" name="catid" label="ID" value={catid as string} disabled />
              <TextField id="catname" name="catname" label="Nombre" value={category.catname} onChange={handleChange} required />
              <TextField id="catgroup" name="catgroup" label="Grupo" value={category.catgroup} onChange={handleChange} required />
              <TextField
                id="catdesc"
                name="catdesc"
                label="Descripción"
                value={category.catdesc}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
              <Button variant="contained" type="submit" color="primary">
                Guardar
              </Button>
            </Box>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default UpdateCategory;
