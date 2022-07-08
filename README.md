# TableData

## VTEX Block Example - Columns Only
```
"tabledata#kids-size-table": {
    "props": {
      "caption": "Kids' Bicycle Sizing Chart",
      "columns": [
        "Rider Height",
        "Bike Size"
      ],
      "data": [
        [
          "42in - 50in",
          "20in Bike"
        ],
        [
          "50in - 58in",
          "24in Bike"
        ],
        [
          "58in +",
          {
            "text": "Adult Bike Sizes",
            "url": "#adult-sizing",
            "newTab": false
          }
        ]
      ]
    }
  }
```
* Table renders in a `<figure>` tag.
* Caption Prop renders above the table data in a `<figcaption>` tag.
* Columns Prop is an array of strings containing the column headers. Number of columns is C.
* Columns render in `<th>` tags and are bold text.
* Data Prop is an array of arrays.
    * Inner Array must be of length C.
    * Array item may be a string or a link prop
        * Link Prop is...
        ```
        "text": "string",
        "url": "string",
        "newTab: boolean
        ```

## DOM Example - Columns Only
```
<figure class="eriksbikeshop-tabledata-1-x-tableDataContainer">
    <figcaption class="eriksbikeshop-tabledata-1-x-caption">
        <div class="eriksbikeshop-tabledata-1-x-captionText">Kids' Bicycle Sizing Chart</div>
    </figcaption>
    <table class="eriksbikeshop-tabledata-1-x-table">
        <thead class="eriksbikeshop-tabledata-1-x-thead">
            <tr data-tr="0" class="eriksbikeshop-tabledata-1-x-tr">
                <th data-th="0" style="width: 50%;" class="eriksbikeshop-tabledata-1-x-th">Rider Height</th>
                <th data-th="1" style="width: 50%;" class="eriksbikeshop-tabledata-1-x-th">Bike Size</th>
            </tr>
        </thead>
        <tbody>
            <tr data-tr="1" class="eriksbikeshop-tabledata-1-x-tr">
                <td class="eriksbikeshop-tabledata-1-x-td">42in - 50in</td>
                <td class="eriksbikeshop-tabledata-1-x-td">20in Bike</td>
            </tr>
            <tr data-tr="2" class="eriksbikeshop-tabledata-1-x-tr">
                <td class="eriksbikeshop-tabledata-1-x-td">50in - 58in</td>
                <td class="eriksbikeshop-tabledata-1-x-td">24in Bike</td>
            </tr>
            <tr data-tr="3" class="eriksbikeshop-tabledata-1-x-tr">
                <td class="eriksbikeshop-tabledata-1-x-td">58in +</td>
                <td class="eriksbikeshop-tabledata-1-x-td">
                    <a href="#adult-sizing" target="_self" class="eriksbikeshop-tabledata-1-x-tdLink">Adult Bike Sizes</a></td>
            </tr>
        </tbody>
    </table>
</figure>
```