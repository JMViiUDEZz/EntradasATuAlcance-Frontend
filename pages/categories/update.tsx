import { Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/layouts/AuthLayouts';
import { validations } from '../../utils';
import entradasatualcancetuApi from '../../api/EntradasATuAlcanceApi';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth/AuthContext';
import { ICategory } from '../../interfaces';
import { CategoryContext } from '../../context/categories/CategoryContext';
// interface IRespuestaRegister {
//     token: string;
//     email: string;
//     password: string;
//     fullname: string;
//     isActive: boolean;
//     role: string;
// }
type CategoryData = {
    // catid: string;
	catgroup: string;
	catname: string;
	catdesc: string;
};
const RegisterPage = () => {
  const router = useRouter();
  //hook
  const { createCategory } = useContext(CategoryContext);

  const { register, handleSubmit, formState: { errors } } = useForm<CategoryData>();

  const [ showError, setShowError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  //manejador del evento submit del formulario
  const onCreateCategory = async ( InputData: CategoryData ) => {
    
    setShowError(false);
    const { catgroup, catname, catdesc } = InputData;
    const {hasError, message } = await createCategory(catgroup, catname, catdesc)
    console.log(hasError, message )

    if (hasError){
        setShowError(true);
        setErrorMessage(message || '');
        setTimeout( () => setShowError(false), 3000);
        return;
    }

    router.replace('/categories');
   
  }

    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onCreateCategory) } noValidate>
                <Box sx={{ width: 350, padding:'10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Crear categoria</Typography>
                            <Chip 
                                label="No reconocemos ese usuario / contraseña"
                                color="error"
                                icon={ <ErrorOutline /> }
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none' }}
                            />
                        </Grid>

                        {/* <Grid item xs={12}>
                            <TextField
                                label="catid"
                                variant="filled"
                                fullWidth 
                                { ...register('catid', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                })}
                                error={ !!errors.catid }
                                helperText={ errors.catid?.message }
                            />
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField
                                label="catname"
                                variant="filled"
                                fullWidth 
                                { ...register('catname', {
                                    required: 'Este campo es requerido',             
                                })}
                                error={ !!errors.catname }
                                helperText={ errors.catname?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="catgroup"
                                variant="filled"
                                fullWidth 
                                { ...register('catgroup', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                                })}
                                error={ !!errors.catname }
                                helperText={ errors.catname?.message }
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="catdesc"
                                variant="filled"
                                fullWidth 
                                { ...register('catdesc', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                                })}
                                error={ !!errors.catdesc }
                                helperText={ errors.catdesc?.message }
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                color="secondary"
                                className='circular-btn'
                                size='large'
                                fullWidth
                            >
                                Ingresar
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            {/* <NextLink 
                                href={ router.query.p ? `/auth/login?p=${ router.query.p }`: '/auth/login' } 
                                passHref
                            > */}
                    <Link href='/auth/login' passHref component={NextLink} underline='always'>
                                    ¿Ya tienes cuenta?
                                </Link>
                            {/* </NextLink> */}
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage