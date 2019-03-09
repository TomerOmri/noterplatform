import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'reactstrap';

export default () => {
    return( <div>
        <Link to="/client/add"> <Button color="success" size="sm" block> + New </Button> </Link>
    </div>)
}