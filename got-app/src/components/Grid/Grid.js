import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this._columns = [
            {
                key: 'displayName',
                name: 'Badge Name',
                width: 200,
            },
            {
                key: 'description',
                name: 'Description',
            }
        ];
    }

    rowGetter = (i) => {
        return this.props.badgeList[i];
    };
    
    
    render() {
        return  (
            <div className="Grid-container">
                <ReactDataGrid
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this.props.badgeList.length}
                minHeight={350} />
            </div>
        );
    }
}
export default Grid;


