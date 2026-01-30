const negativeTestCases = [
  { id: 'NEG_01', input: 'mage email eka amal234@gmail.com+D34:E42', notExpected: 'මගේ email එක amal234@gmail.com' },
  { id: 'NEG_02', input: 'www.srilankaplace.com', notExpected: 'www.srilankaplace.com' },
  { id: 'NEG_03', input: 'mama eka kale naee.', notExpected: 'මම ඒක කලේ නෑ' },
  { id: 'NEG_04', input: 'mama javascript dhannavaa', notExpected: 'මම javascript දන්නවා' },
  { id: 'NEG_05', input: '143/ B2 Kudagama Avissawella', notExpected: '143/ B2 කුඩගම අවිස්සාවෙල්ල' },
  { id: 'NEG_06', input: '<p> Hello World </p>', notExpected: '<p> Hello World </p>' },
  { id: 'NEG_07', input: 'mama java igena gannavaa.', notExpected: 'මම java ඉගෙන ගන්නවා' },
  { id: 'NEG_08', input: 'Honiton eka avissawelle thiyenne', notExpected: 'හොනිටොන් එක අවිස්සාවෙල්ලේ තියෙන්නේ' },
  { id: 'NEG_09', input: 'ceylon tea', notExpected: 'Ceylon tea' },
  { id: 'NEG_10', input: 'crypto invest karanna.', notExpected: 'crypto invest කරන්න' }
];


export default negativeTestCases;