export var JSON_DATA = {
    components: [
      {
        title: "Test",
        theme: "primary",
        collapsible: true,
        key: "test",
        type: "panel",
        label: "Test",
        input: false,
        tableView: false,
        components: [
          {
            label: "Columns",
            columns: [
              {
                components: [
                  {
                    label: "Name",
                    tableView: true,
                    key: "name",
                    type: "sedate",
                    input: true,
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR"
                    }
                  },
                  {
                    title: "Inside column",
                    theme: "info",
                    collapsible: false,
                    key: "insideColumn",
                    type: "panel",
                    label: "Panel",
                    input: false,
                    tableView: false,
                    components: [
                      {
                        label: "Testing Inside Column Panel",
                        tableView: true,
                        key: "testingInsideColumnPanel",
                        type: "textfield",
                        input: true
                      }
                    ],
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR"
                    }
                  },
                  {
                    label: "Allow for edit",
                    tableView: false,
                    key: "allowForEdit",
                    type: "checkbox",
                    input: true,
                    defaultValue: false,
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR"
                    }
                  },
                  {
                    label: "Currency",
                    widget: "choicesjs",
                    tableView: true,
                    selectThreshold: 0.3,
                    key: "currency",
                    type: "secodedroplist",
                    indexeddb: { filter: {} },
                    input: true,
                    hideOnChildrenHidden: false,
                    dataSrc: "json",
                    valueProperty: "email",
                    template: "<span>{{ item.name }}</span>",
                    data: {
                        json: [
                          {
                            label: "John",
                            value: "john.doe@test.com"
                          },
                          {
                            label: "Jane",
                            value: "jane.doe@test.com"
                          }
                        ]
                      },
                    attributes: {
                        key1: "",
                        codeType: "COUNTR"
                    }
                  },
                  {
                    label: "Country",
                    widget: "choicesjs",
                    tableView: true,
                    data: { values: [{ label: "", value: "" }] },
                    selectThreshold: 0.3,
                    key: "country",
                    type: "secodedroplist",
                    indexeddb: { filter: {} },
                    input: true,
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR",
                        waitForCache: false
                    }
                  }
                ],
                width: 6,
                offset: 0,
                push: 0,
                pull: 0,
                size: "sm"
              },
              {
                components: [
                  {
                    label: "Email",
                    tableView: true,
                    key: "email",
                    type: "textfield",
                    input: true,
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR"
                    }
                  },
                  {
                    label: "Gender",
                    labelPosition: "left-left",
                    optionsLabelPosition: "right",
                    inline: false,
                    tableView: false,
                    values: [
                      { label: "Male", value: "male", shortcut: "" },
                      { label: "Female", value: "female", shortcut: "" }
                    ],
                    key: "gender",
                    type: "radio",
                    input: true,
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR"
                    }
                  },
                  {
                    label: "Amount",
                    mask: false,
                    spellcheck: true,
                    tableView: false,
                    delimiter: false,
                    requireDecimal: false,
                    inputFormat: "plain",
                    key: "amount",
                    type: "senumber",
                    input: true,
                    hideOnChildrenHidden: false,
                    attributes: {
                        key1: "",
                        codeType: "COUNTR",
                        currencySearchable: true,
                        currencyCode: "USD",
                        currencySelectable: true,
                        decimalPlaces: 3
                    }
                  }
                ],
                width: 6,
                offset: 0,
                push: 0,
                pull: 0,
                size: "sm"
              }
            ],
            key: "columns",
            type: "columns",
            input: false,
            tableView: false
          },
          {
            label: "Note",
            autoExpand: false,
            tableView: true,
            key: "note",
            type: "textarea",
            input: true,
            attributes: {
                key1: "",
                codeType: "COUNTR"
            }
          },
          {
            title: "Nested Panel",
            theme: "warning",
            collapsible: false,
            key: "nestedPanel",
            type: "panel",
            label: "Panel",
            input: false,
            tableView: false,
            components: [
              {
                label: "Comments",
                autoExpand: false,
                tableView: true,
                key: "comments",
                type: "textarea",
                input: true,
                attributes: {
                    key1: "",
                    codeType: "COUNTR"
                }
              }
            ]
          }
        ],
        collapsed: true
      },
      {
        type: "button",
        label: "Submit",
        key: "submit",
        disableOnInvalid: true,
        input: true,
        tableView: false,
        theme: "primary",
        size: "md",
      }
    ]
  };


export const OPTIONS1 : any =  {
    builder: {
      basic: false,
      data: false,
      premium: false,

      customBasic: {

        title: 'Basic Components',
        default: true,
        weight: 0,
        ignore: false,

        components: {
          textfield: true,
          select: true,
          textarea: true,
          email: true,
          number: true,
          seinput: true,
          secodedroplist: true,
          sedate: true,
          checkbox: true,
          radio: true,
          senumber: true,
        }
      },
      advanced: {
        components: {
          email: false,
          url: false,
          tags: false,
          address: false,
          survey: false,
          currency: false,
          signature: false,
          day: false,
          phoneNumber: false,
          datetime: false,
        }
      },
      layout: {
        title: 'Layout Components',
        weight: 0,
        components: {
          panel: true,
          table: false,
          tabs: false,
          well: false,
          columns: true,
          fieldset: true,
          section: true,
          content: false,
          htmlelement: false

        }
      },
    //   data: {
    //     datagrid: true,
    //     editgrid: true
    //   },
    //   premium:{
    //     title: 'Premium',
    //     components: {
    //       recaptcha: false,
    //       resource: false,
    //       custom: false,
    //       file: false,
    //       form: true
    //     }
    //   }
    },
      editForm: {
        // textfield: false,
        //   textarea: true,
        //   email: true,
        //   seinput: true,
        //   secodedroplist: true,
        email: [{
          key: 'api',
          ignore: true,
        },
        {
          key: 'data',
          ignore: false
        },
        {
          key: 'logic',
          ignore: true
        },
        {
          key: 'conditional',
          ignore: true
        }],
        secodedroplist: [{
          key: 'api',
          ignore: false
        },
        {
          key: 'data',
          ignore: false,
        },
        {
          key: 'logic',
          ignore: true
        },
        {
          key: 'conditional',
          ignore: true
        }],
        sesection: [{
            key: 'api',
            ignore: true
          },
          {
            key: 'data',
            ignore: false
          },
          {
            key: 'logic',
            ignore: true
          },
          {
            key: 'conditional',
            ignore: true
          }],
        seinput: [{
          key: 'api',
          ignore: true
        },
        {
          key: 'data',
          ignore: false
        },
        {
          key: 'logic',
          ignore: true
        },
        {
          key: 'conditional',
          ignore: true
        }],
        textarea: [
            {
                key: 'display',
                ignore: false,
                components: [
                    {
                        key: "prefix",
                        ignore: true
                    },
                    {
                        key: "suffix",
                        ignore: true
                    }
                ]
            },
          {
            key: 'api',
            ignore: false
          },
          {
            key: 'data',
            ignore: false
          },
          {
            key: 'logic',
            ignore: true
          },
          {
            key: 'conditional',
            ignore: true
          }
        ],
        textfield: [
            {
                key: 'display',
                ignore: false,
                components: [
                    {
                        key: "prefix",
                        ignore: true
                    },
                    {
                        key: "suffix",
                        ignore: true
                    },
                    {
                        key:'position',
                        ignore: true
                    },
                    {
                        key: 'displayMask',
                        ignore: true
                    },
                    {
                        key: 'editor',
                        ignore: true
                    },
                    {
                        key: 'customClass',
                        ignore: true
                    },
                    {
                        key: 'inputMask',
                        ignore: true
                    },
                    {
                        key: 'tabindex',
                        ignore: true
                    },
                    {
                        key: 'widget',
                        ignore: true
                    },
                    {
                        key: 'allowMultipleMasks',
                        ignore: true
                    },
                    {
                        key: 'autocomplete',
                        ignore: true
                    },
                    {
                        key: 'hidden',
                        ignore: true
                    },
                    {
                        key: 'hideLabel',
                        ignore: true
                    },
                    {
                        key: 'showWordCount',
                        ignore: true
                    },
                    {
                        key: 'showCharCount',
                        ignore: true
                    },
                    {
                        key: 'autofocus',
                        ignore: true
                    },
                    {
                        key: 'tableView',
                        ignore: false
                    },
                    {
                        key: 'modalEdit',
                        ignore: false
                    },
                    {
                        key: 'spellcheck',
                        ignore: false
                    }


                ]
            }
        ]
      },
    language: 'en',
    i18n: {
      jp: {

      }
    }
  };



export const JSON_DEFAULT_DATA = {
    firstName: "Dharanesh"
}
