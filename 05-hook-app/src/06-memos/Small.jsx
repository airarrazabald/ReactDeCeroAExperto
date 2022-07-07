import { memo } from 'react';

// el memo se usa para memorizar componenetes
// permite que no se vuelvan a renderizar, solo cuando cambien sus propiedades
// solo se recomienda para componentes muy pesados
export const Small = memo(({value}) => {

    console.log('Me volvi a generar :)');

  return (
    <small> { value } </small>
  )
})
