import *  as List from './codes'
export const QueryBuilderType = {
    Claims: 1
  }

export const ConfigFields = {
    Claims: {
      claimId: {
        label: 'ClaimID',
        type: 'text',
        valueSources: ['value']
      },
      typeCode: {
        label: 'Type',
        type: 'select',
        valueSources: ['value'],
        listValues: List.ClaimType
      },
      statusCode: {
        label: 'Status',
        type: 'select',
        valueSources: ['value'],
        listValues: List.ClaimStatus
      },
      billingProviderNPI: {
        label: 'Billing Provider NPI',
        type: 'text',
        valueSources: ['value']
      },
      patientId: {
        label: 'Patient Id',
        type: 'text',
        valueSources: ['value']
      },
      serviceStartDate: {
        label: 'Service Start Date',
        type: 'date',
        valueSources: ['value'],
        fieldSettings: {
          dateFormat: 'YYYY-MM-DD'
        }
      },
      serviceEndDate: {
        label: 'Service End Date',
        type: 'date',
        valueSources: ['value'],
        fieldSettings: {
          dateFormat: 'YYYY-MM-DD'
        }
      },
      // lastPaymentDate: {
      //   label: 'Last Payment Date ',
      //   type: 'date',
      //   valueSources: ['value'],
      //   fieldSettings: {
      //     dateFormat: 'MM-DD-YYYY'
      //   }
      // },
      // patientBirthDate: {
      //   label: 'Patient Birth Date',
      //   type: 'date',
      //   valueSources: ['value'],
      //   fieldSettings: {
      //     dateFormat: 'MM-DD-YYYY'
      //   }
      // },
      patientFirstName: {
        label: 'Patient FirstName ',
        type: 'text',
        valueSources: ['value']
      },
      patientLastName: {
        label: 'Patient LastName ',
        type: 'text',
        valueSources: ['value']
      },
      patientAge: {
        label: 'Patient Age ',
        type: 'number',
        valueSources: ['value'],
        fieldSettings: {
          min: 0,
          max: 160
        }
      },
      patientGender: {
        label: 'Patient Gender ',
        type: 'select',
        valueSources: ['value'],
        listValues: List.PatientGender
      },
      patientAccountNumber: {
        label: 'Patient AccountNumber ',
        type: 'text',
        valueSources: ['value']
      },
      medicalRecordNumber: {
        label: 'Medical RecordNumber',
        type: 'text',
        valueSources: ['value']
      },
      totalBilledAmount: {
        label: 'Total Billed Amount',
        type: 'number',
        valueSources: ['value']
      },
      // authID: {
      //   label: 'AuthID',
      //   type: 'text',
      //   valueSources: ['value']
      // },
      hic: {
        label: 'HIC',
        type: 'text',
        valueSources: ['value']
      },
      headerDiagnosisCode: {
        label: 'Primary Diagnosis Code',
        type: 'text',
        valueSources: ['value']
      },
      headerDiagnosisCode2: {
        label: 'Secondary Diagnosis Code',
        type: 'text',
        valueSources: ['value']
      },
      // headerErrorCode1: {
      //   label: 'Error Code',
      //   type: 'text',
      //   valueSources: ['value']
      // },
      // EOBCode: {
      //   label: 'EOB Code',
      //   type: 'text',
      //   valueSources: ['value']
      // },
      allowedAmount: {
        label: 'AllowedAmount ',
        type: 'number',
        valueSources: ['value']
      },
      paymentAmount: {
        label: 'Approved amount ',
        type: 'number',
        valueSources: ['value']
      },
      claimLines: {
        label: 'Lines',
        tooltip: 'Group of fields',
        type: '!group',
        subfields: {
          lineStatusCode: {
            label: 'Status',
            type: 'select',
            valueSources: ['value'],
            listValues: List.ClaimLineStatus
          },
          lineDiagnosisCode: {
            label: 'Diagnosis Code',
            type: 'text',
            valueSources: ['value']
          },
          lineAllowedAmount: {
            label: 'AllowedAmount ',
            type: 'number',
            valueSources: ['value']
          },
          linePaymentAmount: {
            label: 'PaymentAmount ',
            type: 'number',
            valueSources: ['value']
          },
          linePricingActionCode: {
            label: 'PricingActionCode',
            type: 'select',
            valueSources: ['value'],
            listValues: List.ClaimLineStatus
          },
          lineBilledAmount: {
            label: 'BilledAmount',
            type: 'number',
            valueSources: ['value']
          },
          lineProcedureCode: {
            label: 'ProcedureCode ',
            type: 'text',
            valueSources: ['value']
          },
          lineModifierCode1: {
            label: 'ModifierCode',
            type: 'text',
            valueSources: ['value']
          },
          lineFacilityTypeCode: {
            label: 'FacilityTypeCode',
            type: 'text',
            valueSources: ['value']
          },
          lineServicingNationalProviderIdentifier: {
            label: 'ServicingNPI',
            type: 'text',
            valueSources: ['value']
          },
          lineErrorCode1: {
            label: 'Error Code',
            type: 'text',
            valueSources: ['value']
          },
          lineEobCode1: {
            label: 'EOB Code',
            type: 'text',
            valueSources: ['value']
          },
          lineServiceStartDate: {
            label: 'Service Start Date',
            type: 'date',
            valueSources: ['value'],
            fieldSettings: {
              dateFormat: 'YYYY-MM-DD'
            }
          },
          lineServiceEndDate: {
            label: 'Service End Date',
            type: 'date',
            valueSources: ['value'],
            fieldSettings: {
              dateFormat: 'YYYY-MM-DD'
            }
          }
        }
      }
    }
  }