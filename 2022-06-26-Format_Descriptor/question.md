# Format Descriptor

### you are given a format , which is a string

    ",,1,1,,,,,,"

    "3,6,1,1,1,,"

### you have to find out a descriptor which gives the sheets for the format

```json
// for the first one ",,1,1,,,,,,"

{
  "fontFamily": "'Arial', sans-serif",
  "fontSize": "10pt",
  "fontWeight": "bold",
  "fontStyle": "italic"
}

// for the second one "3,6,1,1,1,,"

{
    "fontFamily": "'Verdana', sans-serif",
    "fontSize": "18pt",
    "fontWeight": "bold",
    "fontStyle": "italic",
    "textDecoration": "underline"
}

```

# Using the information given below

## Format Descriptor table

```txt
0 fontFamily ------------ 0 = Arial, default    "0,,,,,,,,,"
1 fontSize -------------- 0 = 10 pt, default    ",0,,,,,,,,"
2 bold ------------------ 1 = on                ",,1,,,,,,,"
3 italic ---------------- 1 = on                ",,,1,,,,,,"
4 underline ------------- 1 = on                ",,,,1,,,,,"
5 strikethrough --------- 1 = on                ",,,,,1,,,,"
6 horizontalAlign ------- 2 = center            ",,,,,,2,,,"
7 verticalAlign --------- 2 = middle            ",,,,,,,2,,"
8 color (text) ---------- 4 = #FEEEF0           ",,,,,,,,4,"
9 color (background) ---- 8 = #E6F5FE           ",,,,,,,,,8"
```

### and this hash table (map | Object | dictionary | Associative Array | json )

\*what ever you call this

```json

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


```

### Need More Help? [ click me](https://smartsheet-platform.github.io/api-docs/#formatting){:target="\_blank"}

<br/>
<br/>

> ### want solutions
>
> [click here to get solution by me](https://github.com/razaahmad333/coding-challenges/blob/main/2022-06-26-Format_Descriptor/Solutions/Ahmad_Raza/index.js)

or you can checkout solutions by other people in dir given below

```shell
    2020-06-26-Format_Descriptor/Solutions
```
