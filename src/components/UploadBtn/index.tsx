import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function UploadButtons() {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="outlined" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
        </Stack>
    );
}