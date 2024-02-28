# Dashboard Manager
- Aplicação consiste em uma dashboard para gerenciar uma distribuidora de bebidas 

## Tecnologias Usadas.
- React.JS
- React-Routes
- Redux/Toolkit
- React-Icons
- TypeScrip
- Styled-Components
- Banco de Dados - Firebase

const sliceUser =  createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        allUsers(state, {payload}: PayloadAction<IUser[]>) {
            return state = payload;
        },
        loginUser(state, {payload}: PayloadAction<{id: string}>) {  
            if(payload) {
                state = payload;
            }
            return state;
        }
    },

});
