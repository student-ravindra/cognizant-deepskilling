package com.cognizant;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class VerificationTest {

    @Test
    public void testVerifyInteraction() {

        // Step 1: Create Mock Object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject Mock into Service
        MyService service = new MyService(mockApi);

        // Step 3: Call the Method
        service.fetchData();

        // Step 4: Verify Interaction
        verify(mockApi).getData();
    }
}