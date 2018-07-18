import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this._columns = [
            {
                key: 'name',
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
                minHeight={500} />
            </div>
        );
    }
}
export default Grid;


