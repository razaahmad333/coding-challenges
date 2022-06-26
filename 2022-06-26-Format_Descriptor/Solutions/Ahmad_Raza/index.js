// helper function to update the style sheet 
const updateStyleSheet = (newStyle, styleSheet) => {
    return {
        ...styleSheet,
        ...newStyle,
    };
};

// helper function to get default lookup index from a index 

const getDefault = (idx) => {
    return Number(serverInfo.formats.defaults.split(",")[idx]);
};

// helper function to get a index from a lookup
const getLookupIdx = (idx, lookup) => {
    return Number(lookup === "" ? getDefault(idx) : lookup);
};

// function which returns a sheet, that we wanted
function formatDescriptor(format) {

    // first of all we will split the format string into an array
    const lookupArray = format.split(",");
    // it gives ["", "", 1, 1, "", "", "", "", "", ""]

    let style = {};

    for (let i = 0; i < lookupArray.length; i++) {
        const lookup = lookupArray[i];
        const lookup_idx = getLookupIdx(i, lookup); // the index of the value in the info (serverInfo)
        let info; // to store the info of the field 
        if (i === 0) {
            info = serverInfo.formats.fontFamily;
            style = updateStyleSheet(
                {
                    fontFamily: `'${info[lookup_idx].name}', ${info[lookup_idx].traits}`,
                },
                style
            );
        } else if (i === 1) {
            info = serverInfo.formats.fontSize;
            style = updateStyleSheet({ fontSize: `${info[lookup_idx]}pt` }, style);
        } else if (i === 2 && lookup_idx !== 0) {
            style = updateStyleSheet({ fontWeight: "bold" }, style);
        } else if (i === 3 && lookup_idx !== 0) {
            style = updateStyleSheet({ fontStyle: "italic" }, style);
        } else if (i === 4 && lookup_idx !== 0) {
            style = updateStyleSheet({ textDecoration: "underline" }, style);
        } else if (i === 5 && lookup_idx !== 0) {
            style = updateStyleSheet({ textDecoration: "line-through" }, style);
        } else if (i === 6 && lookup_idx !== 0) {
            info = serverInfo.formats.horizontalAlign;
            style = updateStyleSheet({ textAlign: info[lookup_idx] }, style);
        } else if (i === 7 && lookup_idx !== 0) {
            info = serverInfo.formats.verticalAlign;
            style = updateStyleSheet({ verticalAlign: info[lookup_idx] }, style);
        } else if (i === 8 && lookup_idx !== 0) {
            info = serverInfo.formats.color;
            style = updateStyleSheet(
                {
                    color: info[lookup_idx],
                },
                style
            );
        } else if (i === 9 && lookup_idx !== 0) {
            info = serverInfo.formats.color;
            style = updateStyleSheet(
                {
                    backgroundColor: info[lookup_idx],
                },
                style
            );
        }
    }
    return style;
};

const serverInfo = {
    "formats": {
        "defaults": "0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
        "fontFamily": [
            {
                "name": "Arial",
                "traits": [
                    "sans-serif"
                ]
            },
            {
                "name": "Tahoma",
                "traits": [
                    "sans-serif"
                ]
            },
            {
                "name": "Times New Roman",
                "traits": [
                    "serif"
                ]
            },
            {
                "name": "Verdana",
                "traits": [
                    "sans-serif"
                ]
            }
        ],
        "fontSize": [
            "8",
            "9",
            "10",
            "12",
            "14",
            "16",
            "18",
            "20",
            "24",
            "28",
            "32",
            "36"
        ],
        "bold": [
            "none",
            "on"
        ],
        "italic": [
            "none",
            "on"
        ],
        "underline": [
            "none",
            "on"
        ],
        "strikethrough": [
            "none",
            "on"
        ],
        "horizontalAlign": [
            "default",
            "left",
            "center",
            "right"
        ],
        "verticalAlign": [
            "default",
            "top",
            "middle",
            "bottom"
        ],
        "color": [
            "none",
            "#000000",
            "#FFFFFF",
            "transparent",
            "#FFEBEE",
            "#FFF3DF",
            "#FFFEE6",
            "#E7F5E9",
            "#E2F2FE",
            "#F4E4F5",
            "#F2E8DE",
            "#FFCCD2",
            "#FFE1AF",
            "#FEFF85",
            "#C6E7C8",
            "#B9DDFC",
            "#EBC7EF",
            "#EEDCCA",
            "#E5E5E5",
            "#F87E7D",
            "#FFCD7A",
            "#FEFF00",
            "#7ED085",
            "#5FB3F9",
            "#D190DA",
            "#D0AF8F",
            "#BDBDBD",
            "#EA352E",
            "#FF8D00",
            "#FFED00",
            "#40B14B",
            "#1061C3",
            "#9210AD",
            "#974C00",
            "#757575",
            "#991310",
            "#EA5000",
            "#EBC700",
            "#237F2E",
            "#0B347D",
            "#61058B",
            "#592C00"
        ],
    },

}



// driver code 

const formatString1 = ",,1,1,,,,,,";
const formatString2 = "3,6,1,1,1,,";

console.log({ sheet1: formatDescriptor(formatString1), sheet2: formatDescriptor(formatString2) });


// output

// {
//     sheet1: {
//       fontFamily: "'Arial', sans-serif",
//       fontSize: '10pt',
//       fontWeight: 'bold',
//       fontStyle: 'italic'
//     },
//     sheet2: {
//       fontFamily: "'Verdana', sans-serif",
//       fontSize: '18pt',
//       fontWeight: 'bold',
//       fontStyle: 'italic',
//       textDecoration: 'underline'
//     }
//   }
