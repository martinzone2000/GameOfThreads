import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Grid.css';
import { Formatters } from 'react-data-grid-addons';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this._columns = [
            {
                key: 'imageUrl',
                name: 'Icon',
                width: 100,
                formatter: Formatters.ImageFormatter,
                headerRenderer: <Formatters.ImageFormatter />
            },
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
                minHeight={350}
                rowHeight={50} />
            </div>
        );
    }
}
export default Grid;


