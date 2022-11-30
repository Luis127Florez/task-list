import './Menu.css'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
  } from '@chakra-ui/react'

function Menu() {
    return(
        <Box bg='#eeefef' w='100%' p={4} color='#000'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/Tareas'>Tareas</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/Snosotros'>Sobre Nosotros</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
        </Box>
            
    )
}
export default Menu