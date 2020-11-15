import React, { useCallback, useState } from 'react';
import { Chip } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
const SelectableChip = ({ label }) => {
    const [selected, setSelected] = useState(false);

    const onClick = useCallback(() => {
        setSelected(!selected)
    }, [selected]);

    return (
        <Chip label={label} onClick={onClick} color={selected ? 'secondary' : 'default'}></Chip>
    )
}

export default SelectableChip;
