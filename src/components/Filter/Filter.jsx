import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Label } from './Filter.styled';
import { setContactsFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter)

    const onFilterChange = e => {
        dispatch(setContactsFilter(e.target.value))
    };

    return (
        <Container>
            <Label>
                Find contacts by name
                <Input type="text" value={filter} onChange={onFilterChange}/>
            </Label>
        </Container>
    );
};


export default Filter;