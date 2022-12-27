using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;


namespace QuickTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestGetCurrentDate()
        {
            Assert.AreEqual(DateTime.Now.Date, QuickDate.Calendar.GetCurrentDate());
        }
    }
}