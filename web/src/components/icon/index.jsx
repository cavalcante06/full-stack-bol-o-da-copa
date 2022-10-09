import {ReactComponent as seta }  from './sgvs/seta.svg'
import {ReactComponent as arrowright } from './sgvs/arrow-right.svg'
import {ReactComponent as profile }  from './sgvs/profile.svg'
import {ReactComponent as back }  from './sgvs/back.svg'



const icons = {

seta,
arrowright,
profile,
back

}


export const Icon = ({name, ...props}) => {

const Element = icons [name]
return <Element {...props}/>

}