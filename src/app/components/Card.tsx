"use client";

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ActionAreaCardProps from '../interface/ActionAreaCardProps';
import BasicTextFields from './TextField'

export default function ActionAreaCard({ header, description }: Readonly<ActionAreaCardProps>) {
    return (
        <Card sx={{ maxWidth: 600, backgroundColor: '#27272c' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="tw-text-[#35ea9d] tw-text-4xl">
                        {header}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#d1d1d1' }}>
                        {description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#d1d1d1' }} className="tw-mt-5">
                        <form>
                            <BasicTextFields inputType="email" placeholder="Email" />
                        </form>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}