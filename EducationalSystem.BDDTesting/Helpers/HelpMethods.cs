namespace EducationalSystem.BDDTesting.Helpers
{
    public static class HelpMethods
    {
        public static void WaitUntilPageLoad()
        {
            const int waitingTime = 2000;

            System.Threading.Thread.Sleep(waitingTime);
        }
    }
}
