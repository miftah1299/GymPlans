import PropTypes from 'prop-types';

const Navlink = ({route}) => {
    return (
        <li className='hover:bg-slate-500'>
            <a className='text-white' href={route.path}>{route.name}</a>
        </li>
    );
};

Navlink.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Navlink;
