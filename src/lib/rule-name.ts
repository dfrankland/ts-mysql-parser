/* eslint-disable @typescript-eslint/camelcase */

export enum RuleName {
  query = 'query',
  simpleStatement = 'simpleStatement',
  alterStatement = 'alterStatement',
  alterDatabase = 'alterDatabase',
  alterEvent = 'alterEvent',
  alterLogfileGroup = 'alterLogfileGroup',
  alterLogfileGroupOptions = 'alterLogfileGroupOptions',
  alterLogfileGroupOption = 'alterLogfileGroupOption',
  alterServer = 'alterServer',
  alterTable = 'alterTable',
  alterTableActions = 'alterTableActions',
  alterCommandList = 'alterCommandList',
  alterCommandsModifierList = 'alterCommandsModifierList',
  standaloneAlterCommands = 'standaloneAlterCommands',
  alterPartition = 'alterPartition',
  alterList = 'alterList',
  alterCommandsModifier = 'alterCommandsModifier',
  alterListItem = 'alterListItem',
  place = 'place',
  restrict = 'restrict',
  alterOrderList = 'alterOrderList',
  alterAlgorithmOption = 'alterAlgorithmOption',
  alterLockOption = 'alterLockOption',
  indexLockAndAlgorithm = 'indexLockAndAlgorithm',
  withValidation = 'withValidation',
  removePartitioning = 'removePartitioning',
  allOrPartitionNameList = 'allOrPartitionNameList',
  reorgPartitionRule = 'reorgPartitionRule',
  alterTablespace = 'alterTablespace',
  alterUndoTablespace = 'alterUndoTablespace',
  undoTableSpaceOptions = 'undoTableSpaceOptions',
  undoTableSpaceOption = 'undoTableSpaceOption',
  alterTablespaceOptions = 'alterTablespaceOptions',
  alterTablespaceOption = 'alterTablespaceOption',
  changeTablespaceOption = 'changeTablespaceOption',
  alterView = 'alterView',
  viewTail = 'viewTail',
  viewSelect = 'viewSelect',
  viewCheckOption = 'viewCheckOption',
  createStatement = 'createStatement',
  createDatabase = 'createDatabase',
  createDatabaseOption = 'createDatabaseOption',
  createTable = 'createTable',
  tableElementList = 'tableElementList',
  tableElement = 'tableElement',
  duplicateAsQueryExpression = 'duplicateAsQueryExpression',
  queryExpressionOrParens = 'queryExpressionOrParens',
  createRoutine = 'createRoutine',
  createProcedure = 'createProcedure',
  createFunction = 'createFunction',
  createUdf = 'createUdf',
  routineCreateOption = 'routineCreateOption',
  routineAlterOptions = 'routineAlterOptions',
  routineOption = 'routineOption',
  createIndex = 'createIndex',
  indexNameAndType = 'indexNameAndType',
  createIndexTarget = 'createIndexTarget',
  createLogfileGroup = 'createLogfileGroup',
  logfileGroupOptions = 'logfileGroupOptions',
  logfileGroupOption = 'logfileGroupOption',
  createServer = 'createServer',
  serverOptions = 'serverOptions',
  serverOption = 'serverOption',
  createTablespace = 'createTablespace',
  createUndoTablespace = 'createUndoTablespace',
  tsDataFileName = 'tsDataFileName',
  tsDataFile = 'tsDataFile',
  tablespaceOptions = 'tablespaceOptions',
  tablespaceOption = 'tablespaceOption',
  tsOptionInitialSize = 'tsOptionInitialSize',
  tsOptionUndoRedoBufferSize = 'tsOptionUndoRedoBufferSize',
  tsOptionAutoextendSize = 'tsOptionAutoextendSize',
  tsOptionMaxSize = 'tsOptionMaxSize',
  tsOptionExtentSize = 'tsOptionExtentSize',
  tsOptionNodegroup = 'tsOptionNodegroup',
  tsOptionEngine = 'tsOptionEngine',
  tsOptionWait = 'tsOptionWait',
  tsOptionComment = 'tsOptionComment',
  tsOptionFileblockSize = 'tsOptionFileblockSize',
  tsOptionEncryption = 'tsOptionEncryption',
  createView = 'createView',
  viewReplaceOrAlgorithm = 'viewReplaceOrAlgorithm',
  viewAlgorithm = 'viewAlgorithm',
  viewSuid = 'viewSuid',
  createTrigger = 'createTrigger',
  triggerFollowsPrecedesClause = 'triggerFollowsPrecedesClause',
  createEvent = 'createEvent',
  createRole = 'createRole',
  createSpatialReference = 'createSpatialReference',
  srsAttribute = 'srsAttribute',
  dropStatement = 'dropStatement',
  dropDatabase = 'dropDatabase',
  dropEvent = 'dropEvent',
  dropFunction = 'dropFunction',
  dropProcedure = 'dropProcedure',
  dropIndex = 'dropIndex',
  dropLogfileGroup = 'dropLogfileGroup',
  dropLogfileGroupOption = 'dropLogfileGroupOption',
  dropServer = 'dropServer',
  dropTable = 'dropTable',
  dropTableSpace = 'dropTableSpace',
  dropTrigger = 'dropTrigger',
  dropView = 'dropView',
  dropRole = 'dropRole',
  dropSpatialReference = 'dropSpatialReference',
  dropUndoTablespace = 'dropUndoTablespace',
  renameTableStatement = 'renameTableStatement',
  renamePair = 'renamePair',
  truncateTableStatement = 'truncateTableStatement',
  importStatement = 'importStatement',
  callStatement = 'callStatement',
  deleteStatement = 'deleteStatement',
  partitionDelete = 'partitionDelete',
  deleteStatementOption = 'deleteStatementOption',
  doStatement = 'doStatement',
  handlerStatement = 'handlerStatement',
  handlerReadOrScan = 'handlerReadOrScan',
  insertStatement = 'insertStatement',
  insertLockOption = 'insertLockOption',
  insertFromConstructor = 'insertFromConstructor',
  fields = 'fields',
  insertValues = 'insertValues',
  insertQueryExpression = 'insertQueryExpression',
  valueList = 'valueList',
  values = 'values',
  valuesReference = 'valuesReference',
  insertUpdateList = 'insertUpdateList',
  loadStatement = 'loadStatement',
  dataOrXml = 'dataOrXml',
  xmlRowsIdentifiedBy = 'xmlRowsIdentifiedBy',
  loadDataFileTail = 'loadDataFileTail',
  loadDataFileTargetList = 'loadDataFileTargetList',
  fieldOrVariableList = 'fieldOrVariableList',
  replaceStatement = 'replaceStatement',
  selectStatement = 'selectStatement',
  selectStatementWithInto = 'selectStatementWithInto',
  queryExpression = 'queryExpression',
  queryExpressionBody = 'queryExpressionBody',
  queryExpressionParens = 'queryExpressionParens',
  querySpecification = 'querySpecification',
  subquery = 'subquery',
  querySpecOption = 'querySpecOption',
  limitClause = 'limitClause',
  simpleLimitClause = 'simpleLimitClause',
  limitOptions = 'limitOptions',
  limitOption = 'limitOption',
  intoClause = 'intoClause',
  procedureAnalyseClause = 'procedureAnalyseClause',
  havingClause = 'havingClause',
  windowClause = 'windowClause',
  windowDefinition = 'windowDefinition',
  windowSpec = 'windowSpec',
  windowSpecDetails = 'windowSpecDetails',
  windowFrameClause = 'windowFrameClause',
  windowFrameUnits = 'windowFrameUnits',
  windowFrameExtent = 'windowFrameExtent',
  windowFrameStart = 'windowFrameStart',
  windowFrameBetween = 'windowFrameBetween',
  windowFrameBound = 'windowFrameBound',
  windowFrameExclusion = 'windowFrameExclusion',
  withClause = 'withClause',
  commonTableExpression = 'commonTableExpression',
  groupByClause = 'groupByClause',
  olapOption = 'olapOption',
  orderClause = 'orderClause',
  direction = 'direction',
  fromClause = 'fromClause',
  tableReferenceList = 'tableReferenceList',
  selectOption = 'selectOption',
  lockingClause = 'lockingClause',
  lockStrengh = 'lockStrengh',
  lockedRowAction = 'lockedRowAction',
  selectItemList = 'selectItemList',
  selectItem = 'selectItem',
  selectAlias = 'selectAlias',
  whereClause = 'whereClause',
  tableReference = 'tableReference',
  escapedTableReference = 'escapedTableReference',
  joinedTable = 'joinedTable',
  naturalJoinType = 'naturalJoinType',
  innerJoinType = 'innerJoinType',
  outerJoinType = 'outerJoinType',
  tableFactor = 'tableFactor',
  singleTable = 'singleTable',
  singleTableParens = 'singleTableParens',
  derivedTable = 'derivedTable',
  tableReferenceListParens = 'tableReferenceListParens',
  tableFunction = 'tableFunction',
  columnsClause = 'columnsClause',
  jtColumn = 'jtColumn',
  onEmptyOrError = 'onEmptyOrError',
  onEmpty = 'onEmpty',
  onError = 'onError',
  jtOnResponse = 'jtOnResponse',
  unionOption = 'unionOption',
  tableAlias = 'tableAlias',
  indexHintList = 'indexHintList',
  indexHint = 'indexHint',
  indexHintType = 'indexHintType',
  keyOrIndex = 'keyOrIndex',
  constraintKeyType = 'constraintKeyType',
  indexHintClause = 'indexHintClause',
  indexList = 'indexList',
  indexListElement = 'indexListElement',
  updateStatement = 'updateStatement',
  transactionOrLockingStatement = 'transactionOrLockingStatement',
  transactionStatement = 'transactionStatement',
  beginWork = 'beginWork',
  transactionCharacteristic = 'transactionCharacteristic',
  savepointStatement = 'savepointStatement',
  lockStatement = 'lockStatement',
  lockItem = 'lockItem',
  lockOption = 'lockOption',
  xaStatement = 'xaStatement',
  xaConvert = 'xaConvert',
  xid = 'xid',
  replicationStatement = 'replicationStatement',
  resetOption = 'resetOption',
  masterResetOptions = 'masterResetOptions',
  replicationLoad = 'replicationLoad',
  changeMaster = 'changeMaster',
  changeMasterOptions = 'changeMasterOptions',
  masterOption = 'masterOption',
  privilegeCheckDef = 'privilegeCheckDef',
  masterTlsCiphersuitesDef = 'masterTlsCiphersuitesDef',
  masterFileDef = 'masterFileDef',
  serverIdList = 'serverIdList',
  changeReplication = 'changeReplication',
  filterDefinition = 'filterDefinition',
  filterDbList = 'filterDbList',
  filterTableList = 'filterTableList',
  filterStringList = 'filterStringList',
  filterWildDbTableString = 'filterWildDbTableString',
  filterDbPairList = 'filterDbPairList',
  slave = 'slave',
  slaveUntilOptions = 'slaveUntilOptions',
  slaveConnectionOptions = 'slaveConnectionOptions',
  slaveThreadOptions = 'slaveThreadOptions',
  slaveThreadOption = 'slaveThreadOption',
  groupReplication = 'groupReplication',
  preparedStatement = 'preparedStatement',
  executeStatement = 'executeStatement',
  executeVarList = 'executeVarList',
  cloneStatement = 'cloneStatement',
  dataDirSSL = 'dataDirSSL',
  ssl = 'ssl',
  accountManagementStatement = 'accountManagementStatement',
  alterUser = 'alterUser',
  alterUserTail = 'alterUserTail',
  userFunction = 'userFunction',
  createUser = 'createUser',
  createUserTail = 'createUserTail',
  defaultRoleClause = 'defaultRoleClause',
  requireClause = 'requireClause',
  connectOptions = 'connectOptions',
  accountLockPasswordExpireOptions = 'accountLockPasswordExpireOptions',
  dropUser = 'dropUser',
  grant = 'grant',
  grantTargetList = 'grantTargetList',
  grantOptions = 'grantOptions',
  exceptRoleList = 'exceptRoleList',
  withRoles = 'withRoles',
  grantAs = 'grantAs',
  versionedRequireClause = 'versionedRequireClause',
  renameUser = 'renameUser',
  revoke = 'revoke',
  onTypeTo = 'onTypeTo',
  aclType = 'aclType',
  roleOrPrivilegesList = 'roleOrPrivilegesList',
  roleOrPrivilege = 'roleOrPrivilege',
  grantIdentifier = 'grantIdentifier',
  requireList = 'requireList',
  requireListElement = 'requireListElement',
  grantOption = 'grantOption',
  setRole = 'setRole',
  roleList = 'roleList',
  role = 'role',
  tableAdministrationStatement = 'tableAdministrationStatement',
  histogram = 'histogram',
  checkOption = 'checkOption',
  repairType = 'repairType',
  installUninstallStatment = 'installUninstallStatment',
  setStatement = 'setStatement',
  startOptionValueList = 'startOptionValueList',
  transactionCharacteristics = 'transactionCharacteristics',
  transactionAccessMode = 'transactionAccessMode',
  isolationLevel = 'isolationLevel',
  optionValueListContinued = 'optionValueListContinued',
  optionValueNoOptionType = 'optionValueNoOptionType',
  optionValue = 'optionValue',
  setSystemVariable = 'setSystemVariable',
  startOptionValueListFollowingOptionType = 'startOptionValueListFollowingOptionType',
  optionValueFollowingOptionType = 'optionValueFollowingOptionType',
  setExprOrDefault = 'setExprOrDefault',
  showStatement = 'showStatement',
  showCommandType = 'showCommandType',
  nonBlocking = 'nonBlocking',
  fromOrIn = 'fromOrIn',
  inDb = 'inDb',
  profileType = 'profileType',
  otherAdministrativeStatement = 'otherAdministrativeStatement',
  keyCacheListOrParts = 'keyCacheListOrParts',
  keyCacheList = 'keyCacheList',
  assignToKeycache = 'assignToKeycache',
  assignToKeycachePartition = 'assignToKeycachePartition',
  cacheKeyList = 'cacheKeyList',
  keyUsageElement = 'keyUsageElement',
  keyUsageList = 'keyUsageList',
  flushOption = 'flushOption',
  logType = 'logType',
  flushTables = 'flushTables',
  flushTablesOptions = 'flushTablesOptions',
  preloadTail = 'preloadTail',
  preloadList = 'preloadList',
  preloadKeys = 'preloadKeys',
  adminPartition = 'adminPartition',
  resourceGroupManagement = 'resourceGroupManagement',
  createResourceGroup = 'createResourceGroup',
  resourceGroupVcpuList = 'resourceGroupVcpuList',
  vcpuNumOrRange = 'vcpuNumOrRange',
  resourceGroupPriority = 'resourceGroupPriority',
  resourceGroupEnableDisable = 'resourceGroupEnableDisable',
  alterResourceGroup = 'alterResourceGroup',
  setResourceGroup = 'setResourceGroup',
  threadIdList = 'threadIdList',
  dropResourceGroup = 'dropResourceGroup',
  utilityStatement = 'utilityStatement',
  describeCommand = 'describeCommand',
  explainCommand = 'explainCommand',
  explainableStatement = 'explainableStatement',
  helpCommand = 'helpCommand',
  useCommand = 'useCommand',
  restartServer = 'restartServer',
  expr = 'expr',
  boolPri = 'boolPri',
  compOp = 'compOp',
  predicate = 'predicate',
  predicateOperations = 'predicateOperations',
  bitExpr = 'bitExpr',
  simpleExpr = 'simpleExpr',
  arrayCast = 'arrayCast',
  jsonOperator = 'jsonOperator',
  sumExpr = 'sumExpr',
  groupingOperation = 'groupingOperation',
  windowFunctionCall = 'windowFunctionCall',
  windowingClause = 'windowingClause',
  leadLagInfo = 'leadLagInfo',
  nullTreatment = 'nullTreatment',
  jsonFunction = 'jsonFunction',
  inSumExpr = 'inSumExpr',
  identListArg = 'identListArg',
  identList = 'identList',
  fulltextOptions = 'fulltextOptions',
  runtimeFunctionCall = 'runtimeFunctionCall',
  geometryFunction = 'geometryFunction',
  timeFunctionParameters = 'timeFunctionParameters',
  fractionalPrecision = 'fractionalPrecision',
  weightStringLevels = 'weightStringLevels',
  weightStringLevelListItem = 'weightStringLevelListItem',
  dateTimeTtype = 'dateTimeTtype',
  trimFunction = 'trimFunction',
  substringFunction = 'substringFunction',
  functionCall = 'functionCall',
  udfExprList = 'udfExprList',
  udfExpr = 'udfExpr',
  variable = 'variable',
  userVariable = 'userVariable',
  systemVariable = 'systemVariable',
  internalVariableName = 'internalVariableName',
  whenExpression = 'whenExpression',
  thenExpression = 'thenExpression',
  elseExpression = 'elseExpression',
  castType = 'castType',
  exprList = 'exprList',
  charset = 'charset',
  notRule = 'notRule',
  not2Rule = 'not2Rule',
  interval = 'interval',
  intervalTimeStamp = 'intervalTimeStamp',
  exprListWithParentheses = 'exprListWithParentheses',
  exprWithParentheses = 'exprWithParentheses',
  simpleExprWithParentheses = 'simpleExprWithParentheses',
  orderList = 'orderList',
  orderExpression = 'orderExpression',
  groupList = 'groupList',
  groupingExpression = 'groupingExpression',
  channel = 'channel',
  compoundStatement = 'compoundStatement',
  returnStatement = 'returnStatement',
  ifStatement = 'ifStatement',
  ifBody = 'ifBody',
  thenStatement = 'thenStatement',
  compoundStatementList = 'compoundStatementList',
  caseStatement = 'caseStatement',
  elseStatement = 'elseStatement',
  labeledBlock = 'labeledBlock',
  unlabeledBlock = 'unlabeledBlock',
  label = 'label',
  beginEndBlock = 'beginEndBlock',
  labeledControl = 'labeledControl',
  unlabeledControl = 'unlabeledControl',
  loopBlock = 'loopBlock',
  whileDoBlock = 'whileDoBlock',
  repeatUntilBlock = 'repeatUntilBlock',
  spDeclarations = 'spDeclarations',
  spDeclaration = 'spDeclaration',
  variableDeclaration = 'variableDeclaration',
  conditionDeclaration = 'conditionDeclaration',
  spCondition = 'spCondition',
  sqlstate = 'sqlstate',
  handlerDeclaration = 'handlerDeclaration',
  handlerCondition = 'handlerCondition',
  cursorDeclaration = 'cursorDeclaration',
  iterateStatement = 'iterateStatement',
  leaveStatement = 'leaveStatement',
  getDiagnostics = 'getDiagnostics',
  signalAllowedExpr = 'signalAllowedExpr',
  statementInformationItem = 'statementInformationItem',
  conditionInformationItem = 'conditionInformationItem',
  signalInformationItemName = 'signalInformationItemName',
  signalStatement = 'signalStatement',
  resignalStatement = 'resignalStatement',
  signalInformationItem = 'signalInformationItem',
  cursorOpen = 'cursorOpen',
  cursorClose = 'cursorClose',
  cursorFetch = 'cursorFetch',
  schedule = 'schedule',
  columnDefinition = 'columnDefinition',
  checkOrReferences = 'checkOrReferences',
  checkConstraint = 'checkConstraint',
  constraintEnforcement = 'constraintEnforcement',
  tableConstraintDef = 'tableConstraintDef',
  constraintName = 'constraintName',
  fieldDefinition = 'fieldDefinition',
  columnAttribute = 'columnAttribute',
  columnFormat = 'columnFormat',
  storageMedia = 'storageMedia',
  gcolAttribute = 'gcolAttribute',
  references = 'references',
  deleteOption = 'deleteOption',
  keyList = 'keyList',
  keyPart = 'keyPart',
  keyListWithExpression = 'keyListWithExpression',
  keyPartOrExpression = 'keyPartOrExpression',
  keyListVariants = 'keyListVariants',
  indexType = 'indexType',
  indexOption = 'indexOption',
  commonIndexOption = 'commonIndexOption',
  visibility = 'visibility',
  indexTypeClause = 'indexTypeClause',
  fulltextIndexOption = 'fulltextIndexOption',
  spatialIndexOption = 'spatialIndexOption',
  dataTypeDefinition = 'dataTypeDefinition',
  dataType = 'dataType',
  nchar = 'nchar',
  realType = 'realType',
  fieldLength = 'fieldLength',
  fieldOptions = 'fieldOptions',
  charsetWithOptBinary = 'charsetWithOptBinary',
  ascii = 'ascii',
  unicode = 'unicode',
  wsNumCodepoints = 'wsNumCodepoints',
  typeDatetimePrecision = 'typeDatetimePrecision',
  charsetName = 'charsetName',
  collationName = 'collationName',
  createTableOptions = 'createTableOptions',
  createTableOptionsSpaceSeparated = 'createTableOptionsSpaceSeparated',
  createTableOption = 'createTableOption',
  ternaryOption = 'ternaryOption',
  defaultCollation = 'defaultCollation',
  defaultEncryption = 'defaultEncryption',
  defaultCharset = 'defaultCharset',
  partitionClause = 'partitionClause',
  partitionTypeDef = 'partitionTypeDef',
  subPartitions = 'subPartitions',
  partitionKeyAlgorithm = 'partitionKeyAlgorithm',
  partitionDefinitions = 'partitionDefinitions',
  partitionDefinition = 'partitionDefinition',
  partitionValuesIn = 'partitionValuesIn',
  partitionOption = 'partitionOption',
  subpartitionDefinition = 'subpartitionDefinition',
  partitionValueItemListParen = 'partitionValueItemListParen',
  partitionValueItem = 'partitionValueItem',
  definerClause = 'definerClause',
  ifExists = 'ifExists',
  ifNotExists = 'ifNotExists',
  procedureParameter = 'procedureParameter',
  functionParameter = 'functionParameter',
  collate = 'collate',
  typeWithOptCollate = 'typeWithOptCollate',
  schemaIdentifierPair = 'schemaIdentifierPair',
  viewRefList = 'viewRefList',
  updateList = 'updateList',
  updateElement = 'updateElement',
  charsetClause = 'charsetClause',
  fieldsClause = 'fieldsClause',
  fieldTerm = 'fieldTerm',
  linesClause = 'linesClause',
  lineTerm = 'lineTerm',
  userList = 'userList',
  createUserList = 'createUserList',
  alterUserList = 'alterUserList',
  createUserEntry = 'createUserEntry',
  alterUserEntry = 'alterUserEntry',
  retainCurrentPassword = 'retainCurrentPassword',
  discardOldPassword = 'discardOldPassword',
  replacePassword = 'replacePassword',
  userIdentifierOrText = 'userIdentifierOrText',
  user = 'user',
  likeClause = 'likeClause',
  likeOrWhere = 'likeOrWhere',
  onlineOption = 'onlineOption',
  noWriteToBinLog = 'noWriteToBinLog',
  usePartition = 'usePartition',
  fieldIdentifier = 'fieldIdentifier',
  columnName = 'columnName',
  columnInternalRef = 'columnInternalRef',
  columnInternalRefList = 'columnInternalRefList',
  columnRef = 'columnRef',
  insertIdentifier = 'insertIdentifier',
  indexName = 'indexName',
  indexRef = 'indexRef',
  tableWild = 'tableWild',
  schemaName = 'schemaName',
  schemaRef = 'schemaRef',
  procedureName = 'procedureName',
  procedureRef = 'procedureRef',
  functionName = 'functionName',
  functionRef = 'functionRef',
  triggerName = 'triggerName',
  triggerRef = 'triggerRef',
  viewName = 'viewName',
  viewRef = 'viewRef',
  tablespaceName = 'tablespaceName',
  tablespaceRef = 'tablespaceRef',
  logfileGroupName = 'logfileGroupName',
  logfileGroupRef = 'logfileGroupRef',
  eventName = 'eventName',
  eventRef = 'eventRef',
  udfName = 'udfName',
  serverName = 'serverName',
  serverRef = 'serverRef',
  engineRef = 'engineRef',
  tableName = 'tableName',
  filterTableRef = 'filterTableRef',
  tableRefWithWildcard = 'tableRefWithWildcard',
  tableRef = 'tableRef',
  tableRefList = 'tableRefList',
  tableAliasRefList = 'tableAliasRefList',
  parameterName = 'parameterName',
  labelIdentifier = 'labelIdentifier',
  labelRef = 'labelRef',
  roleIdentifier = 'roleIdentifier',
  roleRef = 'roleRef',
  pluginRef = 'pluginRef',
  componentRef = 'componentRef',
  resourceGroupRef = 'resourceGroupRef',
  windowName = 'windowName',
  pureIdentifier = 'pureIdentifier',
  identifier = 'identifier',
  identifierList = 'identifierList',
  identifierListWithParentheses = 'identifierListWithParentheses',
  qualifiedIdentifier = 'qualifiedIdentifier',
  simpleIdentifier = 'simpleIdentifier',
  dotIdentifier = 'dotIdentifier',
  ulong_number = 'ulong_number',
  real_ulong_number = 'real_ulong_number',
  ulonglong_number = 'ulonglong_number',
  real_ulonglong_number = 'real_ulonglong_number',
  literal = 'literal',
  signedLiteral = 'signedLiteral',
  stringList = 'stringList',
  textStringLiteral = 'textStringLiteral',
  textString = 'textString',
  textStringHash = 'textStringHash',
  textLiteral = 'textLiteral',
  textStringNoLinebreak = 'textStringNoLinebreak',
  textStringLiteralList = 'textStringLiteralList',
  numLiteral = 'numLiteral',
  boolLiteral = 'boolLiteral',
  nullLiteral = 'nullLiteral',
  temporalLiteral = 'temporalLiteral',
  floatOptions = 'floatOptions',
  standardFloatOptions = 'standardFloatOptions',
  precision = 'precision',
  textOrIdentifier = 'textOrIdentifier',
  lValueIdentifier = 'lValueIdentifier',
  roleIdentifierOrText = 'roleIdentifierOrText',
  sizeNumber = 'sizeNumber',
  parentheses = 'parentheses',
  equal = 'equal',
  optionType = 'optionType',
  varIdentType = 'varIdentType',
  setVarIdentType = 'setVarIdentType',
  identifierKeyword = 'identifierKeyword',
  identifierKeywordsAmbiguous1RolesAndLabels = 'identifierKeywordsAmbiguous1RolesAndLabels',
  identifierKeywordsAmbiguous2Labels = 'identifierKeywordsAmbiguous2Labels',
  labelKeyword = 'labelKeyword',
  identifierKeywordsAmbiguous3Roles = 'identifierKeywordsAmbiguous3Roles',
  identifierKeywordsUnambiguous = 'identifierKeywordsUnambiguous',
  roleKeyword = 'roleKeyword',
  lValueKeyword = 'lValueKeyword',
  identifierKeywordsAmbiguous4SystemVariables = 'identifierKeywordsAmbiguous4SystemVariables',
  roleOrIdentifierKeyword = 'roleOrIdentifierKeyword',
  roleOrLabelKeyword = 'roleOrLabelKeyword'
}
