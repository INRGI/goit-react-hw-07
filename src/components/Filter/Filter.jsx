import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Label } from './Filter.styled';
import { setContactsFilter } from '../../redux/filtersSlice';
import { getFilters } from '../../redux/selectors';

const Filter = () => {
    const dispatch = useDispatch();

    const onFilterChange = e => {
        dispatch(setContactsFilter(e.target.value))
    };

    return (
        <Container>
            <Label>
                Find contacts by name
                <Input type="text" value={useSelector(getFilters)} onChange={onFilterChange}/>
            </Label>
        </Container>
    );
};


export default Filter;