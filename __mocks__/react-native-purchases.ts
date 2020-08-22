jest.mock('react-native-purchases', () => ({
  setupPurchases: jest.fn(),
  setAllowSharingStoreAccount: jest.fn(),
  addAttributionData: jest.fn(),
  getOfferings: jest.fn(),
  getProductInfo: jest.fn(),
  makePurchase: jest.fn(),
  restoreTransactions: jest.fn(),
  getAppUserID: jest.fn(),
  createAlias: jest.fn(),
  identify: jest.fn(),
  setDebugLogsEnabled: jest.fn(),
  getPurchaserInfo: jest.fn(),
  reset: jest.fn(),
  syncPurchases: jest.fn(),
  setFinishTransactions: jest.fn(),
  purchaseProduct: jest.fn(),
  purchasePackage: jest.fn(),
  isAnonymous: jest.fn(),
  makeDeferredPurchase: jest.fn(),
  checkTrialOrIntroductoryPriceEligibility: jest.fn(),
  purchaseDiscountedPackage: jest.fn(),
  purchaseDiscountedProduct: jest.fn(),
  getPaymentDiscount: jest.fn(),
  invalidatePurchaserInfoCache: jest.fn(),
  setAttributes: jest.fn(),
  setEmail: jest.fn(),
  setPhoneNumber: jest.fn(),
  setDisplayName: jest.fn(),
  setPushToken: jest.fn()
}))
