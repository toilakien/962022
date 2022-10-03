import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {

    const params = window.location.href.split("/").slice(3);
    console.log(params);
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs sx={{ml:2}} color='black' aria-label="breadcrumb">

                {params.map((e, index) => {
                    return (
                        <Link key={index} underline="hover" color="inherit" href="/">
                            {e}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </div>
    );
}
