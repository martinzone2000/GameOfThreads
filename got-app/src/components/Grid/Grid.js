import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                width: 40,
            },
            {
                key: 'badgeName',
                name: 'Badge Name',
                width: 200,
            },
            {
                key: 'badgeDescription',
                name: 'Description',
            }
        ];
    }

    createRows = (numRows) => {
        let rows = [];
        for (let i = 1; i < numRows; i++) {
            rows.push({
                id: i,
                badgeName: 'Title ' + i,
                badgeDescription: i * 1000
            });
        }

        this._rows = rows;
    };

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


