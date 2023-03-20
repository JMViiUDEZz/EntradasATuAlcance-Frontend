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

interface IRespuestaRegister {
    token: string;
    email: string;
    password: string;
    fullname: string;
    isActive: boolean;
    role: string;
}
type UserData = {
    email: string,
    password: string,
    fullname: string
};
const RegisterPage = () => {
  const router = useRouter();
  //hook
  const { registerUser } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();

  const [ showError, setShowError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  //manejador del evento submit del formulario
  const onRegisterUser = async ( InputData: UserData ) => {
    
    setShowError(false);
    const { email, password, fullname } = InputData;
    const {hasError, message } = await registerUser(email, password, fullname)
    console.log(hasError, message )

    if (hasError){
        setShowError(true);
        setErrorMessage(message || '');
        setTimeout( () => setShowError(false), 3000);
        return;
    }

    router.replace('/');
   
  }

//   return (
//     <AuthLayout title={'Ingresar'}>
//        <form onSubmit={ handleSubmit(onRegisterUser)} noValidate>
//         <Box sx={{ width: 350, padding: '10px 20px'}}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                     <Typography variant='h3' component='h1'>Crear Cuenta</Typography>
//                     <Chip 
//                                 label="No se reconoce usuario/contraseña"
//                                 color="error"
//                                 icon= {<ErrorOutline />}
//                                 className="fadeIn"
//                                 sx={{ display: showError ? 'flex': 'none'}}
//                             />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField 
//                         { ...register('fullname', {
//                             required: 'Nombre y Apellidos obligatorio'
//                         })}
//                         error= { !!errors.fullname}
//                         helperText = { errors.fullname?.message }
//                         label="Nombre y Apellidos" variant='filled' fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField 
//                         { ...register('email', {
//                             required: 'Email obligatorio',
//                             validate: validations.isEmail
//                         })}
//                         error= { !!errors.email}
//                         helperText = { errors.email?.message }
//                         label="Correo" variant='filled' fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField 
//                         { ...register('password', {
//                             required: 'Password requerido',
//                             minLength: { value:6, message: 'Minimo 6 caracteres'}
//                         })}
//                         error= { !!errors.password}
//                         helperText = { errors.password?.message }
//                         label="Contraseña" type="password" variant='filled' fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Button 
//                         type="submit" color='secondary' className='circular-btn' size='large' fullWidth>
//                         Ingresar
//                     </Button>
//                 </Grid>
//                 <Grid item xs={12} display='flex' justifyContent='end'>
//                     <Link href='/auth/register' passHref component={NextLink} underline='always'>
//                         ¿ No tienes cuenta ... ?
//                     </Link>
//                 </Grid>
//             </Grid>
//         </Box>
//       </form>
//     </AuthLayout>
//   )
// }

// export default RegisterPage



// import { useState, useContext } from 'react';
// import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';

// import NextLink from 'next/link';
// import { signIn, getSession } from 'next-auth/react';

// import { useForm } from 'react-hook-form';
// import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
// import { ErrorOutline } from '@mui/icons-material';

// import { AuthContext } from '../../context';
// import { AuthLayout } from '../../components/layouts'
// import { validations } from '../../utils';
// import { GetServerSideProps } from 'next';
// import { Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
// import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
// import NextLink from 'next/link';
// import { useState, useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { AuthLayout } from '../../components/layouts';
// import { validations } from '../../utils';
// import entradasatualcancetuApi from '../../api/EntradasATuAlcanceApi';
// import { useRouter } from 'next/router';
// import { AuthContext } from '../../context/auth';
// // import { getSession } from 'next-auth/react';

// interface IRespuestaRegister {
//     token: string;
//     email: string;
//     password: string;
//     fullname: string;
//     isActive: boolean;
//     roles: String[]
// }


// type FormData = {
//     fullname: string;
//     email: string;
//     password: string;
// };


// const RegisterPage = () => {

//     const router = useRouter();
//     const { registerUser } = useContext( AuthContext );


//     const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
//     const [ showError, setShowError ] = useState(false);
//     const [ errorMessage, setErrorMessage ] = useState('');

//     const onRegisterForm = async( InputData: FormData ) => {
        
//         setShowError(false);
//         const { email, password, fullname } = InputData;
//         const { hasError, message } = await registerUser(fullname, email, password);
//         console.log(hasError, message )

//         if ( hasError ) {
//             setShowError(true);
//             setErrorMessage( message! );
//             setTimeout(() => setShowError(false), 3000);
//             return;
//         }
        
//         // Todo: navegar a la pantalla que el usuario estaba
//         // const destination = router.query.p?.toString() || '/';
//         // router.replace(destination);

//         // await signIn('credentials',{ email, password });
//         router.replace('/');

//     }

    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onRegisterUser) } noValidate>
                <Box sx={{ width: 350, padding:'10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Crear cuenta</Typography>
                            <Chip 
                                label="No reconocemos ese usuario / contraseña"
                                color="error"
                                icon={ <ErrorOutline /> }
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Nombre completo"
                                variant="filled"
                                fullWidth 
                                { ...register('fullname', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                })}
                                error={ !!errors.fullname }
                                helperText={ errors.fullname?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Correo"
                                variant="filled"
                                fullWidth 
                                { ...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: validations.isEmail
                                    
                                })}
                                error={ !!errors.email }
                                helperText={ errors.email?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type='password'
                                variant="filled"
                                fullWidth 
                                { ...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                                })}
                                error={ !!errors.password }
                                helperText={ errors.password?.message }
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



// // export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
// //     const session = await getSession({ req });
// //     // console.log({session});

// //     const { p = '/' } = query;

// //     if ( session ) {
// //         return {
// //             redirect: {
// //                 destination: p.toString(),
// //                 permanent: false
// //             }
// //         }
// //     }


// //     return {
// //         props: { }
// //     }
// // }

export default RegisterPage