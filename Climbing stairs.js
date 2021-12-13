function climbingStairs(cost) 
{
	return climbingS(cost,cost.length);
}
function climbingS(cost, n) 
{
    var dp = new Array(n);
	if (n == 1) return cost[0];
	    dp[0] = cost[0];
	    dp[1] = cost[1];
    for (var i = 2; i < n; i++){
		 dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i];
	        }
	return Math.min(dp[n-2],dp[n-1]);
}